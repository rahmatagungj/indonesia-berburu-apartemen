function apartmentHunting(blocks, reqs) {
  const maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity)

  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      let closestReqDistance = Infinity
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReqDistance = Math.min(
            closestReqDistance,
            distanceBetween(i, j)
          )
        }
      }
      maxDistancesAtBlocks[i] = Math.max(
        maxDistancesAtBlocks[i],
        closestReqDistance
      )
    }
  }

  return getIdxAtMinValue(maxDistancesAtBlocks)
}

function distanceBetween(a, b) {
  return Math.abs(a - b)
}

function getIdxAtMinValue(arr) {
  let idxAtMinValue = 0
  let minValue = Infinity
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i]
    if (currentValue < minValue) {
      minValue = currentValue
      idxAtMinValue = i
    }
  }
  return idxAtMinValue
}

// dont change the code below
exports.apartmentHunting = apartmentHunting
