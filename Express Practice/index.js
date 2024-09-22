// const express = require("express");
// const app = new express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(3000, () => {
//   console.log("The port is running on 3000");
// });

// const express = require("express");

// const app = new express();

// function sum(n) {
//   let ans = 0;
//   for (let i = 0; i <= n; i++) {
//     ans = ans + i;
//   }
//   return ans;
// }

// app.get("/", (req, res) => {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("Hi your answer is " + ans);
// });

// app.listen(3000, () => {
//   console.log("The port is running on 3000");
// });

// const { json } = require("body-parser");
// const express = require("express");
// const app = new express();

// const users = [
//   {
//     name: "Chinmay",
//     kidneys: [
//       {
//         healthy: false,
//       },
//     ],
//   },
// ];
// app.use(express.json());

// app.get("/", (req, res) => {
//   const chinmayKidneys = users[0].kidneys;
//   const noOfKidneys = chinmayKidneys.length;

//   let noOfHealthyKidneys = 0;
//   for (let i = 0; i < chinmayKidneys.length; i++) {
//     if (chinmayKidneys[i].healthy) {
//       noOfHealthyKidneys = noOfHealthyKidneys + 1;
//     }
//   }
//   const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;

//   res.json({
//     noOfKidneys,
//     noOfHealthyKidneys,
//     noOfUnhealthyKidneys,
//   });
// });

// app.post("/", (req, res) => {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidneys.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     message: "Done!",
//   });
// });

// app.put("/", (req, res) => {
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     users[0].kidneys[i].healthy = true;
//   }
//   res.json({});
// });

// app.delete("/", (req, res) => {
//   const newKidneys = [];
//   for (let i = 0; i < users[0].kidneys.length; i++) {
//     if (users[0].kidneys[i].healthy) {
//       newKidneys.push({
//         healthy: true,
//       });
//     }
//   }
//   users[0].kidneys = newKidneys;
//   res, json({ message: "Done!" });
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// Reading the file from the server
// const express = require("express");
// const app = new express();

// const fs = require("fs");

// app.get("/files/:test.txt", (req, res) => {
//   const name = req.params.test;
//   console.log(name);
//   fs.readFile(name, "utf-8", (err, data) => {
//     res.json({
//       data,
//     });
//   });
// });

// app.listen(3000);

// Important example to study get, post, put and delete

const express = require("express");
const app = new express();

const users = [
  {
    name: "Chinmay",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  const chinmayKidneys = users[0].kidneys;
  const noOfKidneys = chinmayKidneys.length;
  let noOfHealthyKidneys = 0;

  for (let i = 0; i < chinmayKidneys.length; i++) {
    if (chinmayKidneys[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "Process is done",
  });
});

// unhealthy kidneys are updated to healthy kidneys
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// removing all the unhealthy kidneys
app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({ Message: "Done" });
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
