const {
  apartmentHunting,
} = require("../../apartmentHunting")

describe("Fast Test", () => {
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
            school: true,
            store: true,
          },
        ],
        ["gym", "school", "store"]
      )
    ).toEqual(0)
  })

  it("Test Case #3", () => {
    expect(
      apartmentHunting(
        [
          {
            gym: true,
            school: true,
            store: false,
          },
          {
            gym: true,
            school: true,
            store: false,
          },
          {
            gym: true,
            school: true,
            store: false,
          },
        ],
        ["gym", "store"]
      )
    ).toEqual(0)
  })
})
