//StrictNUll Checks
// let title: string = "intro";
// title = undefined;

let subtitle: string | undefined = undefined;

//void: function dosent return a useful value
function log(msg: string): void {
  console.log(msg);
}

// never returns
function fail(msg: string): never {
  throw new Error(msg);
}

//DO NOT USE "ANY"
