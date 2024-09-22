// creating an http server using express
// node default library -> no

// const express = require('express');

// const app = new express();

// function sum(n){
//     let ans = 0;
//     for(let i = 1; i <= n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get("/", (req, res) => {
//     // how to get query parameter
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("Hi your ans is " + ans);
// })

// app.listen(3000)

// const express = require('express');
// const app = new express();

// // req, res => request and response
// app.get('/', (req, res) => {

// })

// app.listen(3000);

const express = require("express");
const app = express();

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;

  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

// update every kidney to be healthy
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// removing all the unhealthy kidneys
app.delete("/", (req, res) => {
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done"})
})

app.listen(3000);
