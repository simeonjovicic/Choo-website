import { createInterface } from "node:readline";
import { Writable } from "node:stream";
import { webcrypto } from "node:crypto";

if (!globalThis.crypto) {
  Object.defineProperty(globalThis, "crypto", { value: webcrypto });
}

const ITERATIONS = 210_000;

function bytesToBase64(bytes: Uint8Array): string {
  return Buffer.from(bytes).toString("base64");
}

async function pbkdf2(password: string, salt: Uint8Array): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const saltBuffer = salt.buffer.slice(salt.byteOffset, salt.byteOffset + salt.byteLength) as ArrayBuffer;
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt: saltBuffer, iterations: ITERATIONS, hash: "SHA-256" },
    key,
    256,
  );
  return new Uint8Array(bits);
}

function hiddenQuestion(prompt: string): Promise<string> {
  let muted = false;
  const output = new Writable({
    write(chunk: Buffer, _encoding: BufferEncoding, callback: (error?: Error | null) => void) {
      if (!muted) process.stdout.write(chunk);
      callback();
    },
  });
  const rl = createInterface({ input: process.stdin, output, terminal: true });

  return new Promise((resolve) => {
    muted = true;
    process.stdout.write(prompt);
    rl.question("", (answer: string) => {
      muted = false;
      process.stdout.write("\n");
      rl.close();
      resolve(answer);
    });
  });
}

const password = await hiddenQuestion("Admin password: ");
const confirm = await hiddenQuestion("Confirm password: ");

if (!password || password !== confirm) {
  console.error("Passwords do not match.");
  process.exit(1);
}

const salt = new Uint8Array(32);
crypto.getRandomValues(salt);
const hash = await pbkdf2(password, salt);

console.log("\nSet these as Wrangler secrets:");
console.log(`ADMIN_SALT=${bytesToBase64(salt)}`);
console.log(`ADMIN_HASH=${bytesToBase64(hash)}`);
console.log(`PBKDF2_ITERATIONS=${ITERATIONS}`);
