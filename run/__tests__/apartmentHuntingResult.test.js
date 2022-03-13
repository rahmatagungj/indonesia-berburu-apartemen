const {
  apartmentHunting,
} = require("../../apartmentHunting")

describe("Result Test", () => {
  it("Test Case #1", () => {
    expect(
      apartmentHunting(
        [
          {
            gym: false,
            school: true,
            store: false,
          },
          {
            gym: true,
            school: false,
            store: false,
          },
          {
            gym: true,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: true,
          },
        ],
        ["gym", "school", "store"]
      )
    ).toEqual(3)
  })

  it("Test Case #2", () => {
    expect(
      apartmentHunting(
        [
          {
            gym: false,
            office: true,
            school: true,
            store: false,
          },
          {
            gym: true,
            office: false,
            school: false,
            store: false,
          },
          {
            gym: true,
            office: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: false,
            school: true,
            store: true,
          },
        ],
        ["gym", "school", "store", "office"]
      )
    ).toEqual(2)
  })

  it("Test Case #3", () => {
    expect(
      apartmentHunting(
        [
          {
            gym: false,
            office: true,
            school: true,
            store: false,
          },
          {
            gym: true,
            office: false,
            school: false,
            store: false,
          },
          {
            gym: true,
            office: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: false,
            school: true,
            store: true,
          },
        ],
        ["gym", "office", "school", "store"]
      )
    ).toEqual(2)
  })

  it("Test Case #4", () => {
    expect(
      apartmentHunting(
        [
          {
            foo: true,
            gym: false,
            kappa: false,
            office: true,
            school: true,
            store: false,
          },
          {
            foo: true,
            gym: true,
            kappa: false,
            office: false,
            school: false,
            store: false,
          },
          {
            foo: true,
            gym: true,
            kappa: false,
            office: false,
            school: true,
            store: false,
          },
          {
            foo: true,
            gym: false,
            kappa: false,
            office: false,
            school: true,
            store: false,
          },
          {
            foo: true,
            gym: true,
            kappa: false,
            office: false,
            school: true,
            store: false,
          },
          {
            foo: true,
            gym: false,
            kappa: false,
            office: false,
            school: true,
            store: true,
          },
        ],
        ["gym", "school", "store"]
      )
    ).toEqual(4)
  })

  it("Test Case #5", () => {
    expect(
      apartmentHunting(
        [
          {
            gym: true,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            school: false,
            store: true,
          },
          {
            gym: true,
            school: false,
            store: false,
          },
          {
            gym: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: false,
          },
        ],
        ["gym", "school", "store"]
      )
    ).toEqual(2)
  })

  it("Test Case #6", () => {
    expect(
      apartmentHunting(
        [
          {
            gym: true,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            pool: false,
            school: false,
            store: true,
          },
          {
            gym: true,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            pool: true,
            school: false,
            store: false,
          },
        ],
        ["gym", "pool", "school", "store"]
      )
    ).toEqual(7)
  })

  it("Test Case #7", () => {
    expect(
      apartmentHunting(
        [
          {
            gym: true,
            office: false,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: true,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: true,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: true,
          },
          {
            gym: true,
            office: true,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: true,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: true,
            school: false,
            store: false,
          },
        ],
        ["gym", "pool", "school", "store"]
      )
    ).toEqual(4)
  })
})
