import hash from "./index";

test("one level, hash to be the same", () => {
  expect(hash({b: "bbb", a: "aaa"})).toEqual(hash({a: "aaa", b: "bbb"}));
});

test("two level, hash to be the same", () => {
  expect(
    hash({
      b: "bbb",
      a: {
        c: "ccc",
        d: "ddd"
      }
    })
  ).toEqual(
    hash({
      a: {
        d: "ddd",
        c: "ccc"
      },
      b: "bbb"
    })
  );
});

test("three level, hash to be the same", () => {
  expect(
    hash({
      b: "bbb",
      a: {
        c: {
          e: "eee",
          f: "fff"
        },
        d: "ddd"
      }
    })
  ).toEqual(
    hash({
      a: {
        d: "ddd",
        c: {
          f: "fff",
          e: "eee"
        }
      },
      b: "bbb"
    })
  );
});

test("three level with null, hash to be the same", () => {
  expect(
    hash({
      b: "bbb",
      a: {
        c: {
          e: null,
          f: "fff"
        },
        d: "ddd"
      }
    })
  ).toEqual(
    hash({
      a: {
        d: "ddd",
        c: {
          f: "fff",
          e: null
        }
      },
      b: "bbb"
    })
  );
});

test("three level with empty object, hash to be the same", () => {
  expect(
    hash({
      b: "bbb",
      a: {
        c: {
          e: {},
          12: [],
          g: "ggg"
        },
        d: "ddd"
      }
    })
  ).toEqual(
    hash({
      a: {
        d: "ddd",
        c: {
          12: [],
          g: "ggg",
          e: {}
        }
      },
      b: "bbb"
    })
  );
});

test("one level array, hash to be the same", () => {
  expect(
    hash([
      {
        b: "bbb",
        a: "aaa"
      }
    ])
  ).toEqual(
    hash([
      {
        a: "aaa",
        b: "bbb"
      }
    ])
  );
});

test("two level array, hash to be the same", () => {
  expect(
    hash([
      {
        b: [{d: "ddd", c: "ccc"}],
        a: "aaa"
      }
    ])
  ).toEqual(
    hash([
      {
        a: "aaa",
        b: [{c: "ccc", d: "ddd"}]
      }
    ])
  );
});

test("three level array, hash to be the same", () => {
  expect(
    hash([
      {
        b: [{d: ["f", "g", {e: "eee", h: "hhh"}], c: "ccc"}],
        a: "aaa"
      }
    ])
  ).toEqual(
    hash([
      {
        a: "aaa",
        b: [{c: "ccc", d: ["f", "g", {h: "hhh", e: "eee"}]}]
      }
    ])
  );
});

test("one level number, hash to be the same", () => {


  expect(hash({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Shopback-Country': 'VR',
    'X-Shopback-Domain': 'www.test.co.id',
    'X-Shopback-Language': 'id',
    'X-Shopback-Agent': 'asd/1.0',
    'X-Shopback-Internal': '123123123123',
    categoryId: 123123,
    priority: 3,
    domain: 'www.test.co.id'
  })).toEqual(hash({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Shopback-Country': 'VR',
    'X-Shopback-Domain': 'www.test.co.id',
    'X-Shopback-Language': 'id',
    'X-Shopback-Agent': 'asd/1.0',
    'X-Shopback-Internal': '123123123123',
    categoryId: 123123,
    priority: 3,
    domain: 'www.test.co.id'
  }));
});
