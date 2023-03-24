//explain async await in js

function getTodos() {
  console.log("Getting todos...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ todos: [1, 2, 3] });
    }, 2000);
  });
}

async function init() {
  const result = await getTodos();
  console.log(result);
}

init();