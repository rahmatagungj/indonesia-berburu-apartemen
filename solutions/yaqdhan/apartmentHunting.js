function apartmentHunting(blocks, reqs) {
  if (blocks.length <= 1) return 0;
  const nearestFeatureStep = (index, feature) => {
    const mapped = blocks.map((x, i) => [i, x[feature]]).filter(x => x[1]);
    const sorted = mapped.map((x, i) => [i, Math.abs(index - x[0])]).sort((a, b) => a[1] - b[1]);
    return sorted[0] ? sorted[0][1] : 0;
  }
  const points = blocks.map((_, i) => [i, reqs.map(y => nearestFeatureStep(i, y))]);
  const sort = points.sort((a, b) => Math.max(...a[1]) - Math.max(...b[1]));

  return sort[0][0];
}

// dont change the code below
exports.apartmentHunting = apartmentHunting
