var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  return Math.ceil(
    Math.log(buckets) / Math.log(minutesToTest / minutesToDie + 1)
  );
};
