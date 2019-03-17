module.exports = string => {
  let keys = string.split(' ')
  // алгоритма Фишера-Йетса
  function shuffle(arr){
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  keys = shuffle(keys)
  return keys.join()
}