// Exclude<U, V> -> remove from U those numbers assignable to V
// Extract<U, V> -> keep from U those memebers assianable to V
// Nonnullable

type eventType1 = "click" | "submit" | "hover" | "keydown" | "keyup";
type eventType2 = Exclude<eventType1, "keydown">;

function handleEvent1(e: eventType2) {
  console.log(e);
}

// handleEvent1("keydown"); // Error

type ActionN1 = "click" | "submit" | "hover" | "keydown" | "keyup";
type ActionN2 = Extract<ActionN1, "submit" | "hover">;

function handleEvent2(e: ActionN2) {
  console.log(e);
}

// handleEvent2("click"); // Error

type MayBeNumber = number | null | undefined;
type CleanNumber = NonNullable<MayBeNumber>; // number

function square(num: CleanNumber) {
  return num * 2;
}

square(10);
// square(null)
