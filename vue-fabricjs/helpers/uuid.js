export default function guid () {
            return Math.floor((1 + Math.random()) * 0x10100)
                   .toString(16)
                  .substring(1);
  }