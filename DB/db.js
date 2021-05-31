require('dotenv').config()
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.URI_MONGO);
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function connect() {
    try {
        await client.connect();
        const database = client.db(process.env.DB_NAME);
        return database;

    } catch (e) {
        console.error(e);
    }

}

async function close() {
    await client.close();
}




/*Operation for Users*/
/* 
----------------------------------------------
    1.info={
    "email" : "a@gmail.com",
    "name" : "Alex",
    "surname" : "Marius",
    "date_of_birth" : "10-07-2021",
    "weight" : "82",
    "height" : "182",
    "blood_type" : "A",
    "cnp" : "19801123123"}
-----------------------------------------------
    2.email="a@gmail.com"
-----------------------------------------------
    3.infoUp={$set: {"name": "Alex"}}
*/
async function insertUser(info) {
    const data = await connect();
    const result = await data.collection(process.env.DB_COL_USER).insertOne(info, function(err, res) {
        if (err) throw err;
        close();
    });

}

async function changeUser(email, infoUp) {
    const data = await connect();
    const id = await searchUser(email);
    const options = { upsert: false };
    const result = await data.collection(process.env.DB_COL_USER).updateOne(id, infoUp, options);
    close();
}

async function searchUser(email) {
    const data = await connect();
    const filter = { email: `${email}` }
    const options = {
        projection: { _id: 1 }
    };
    const result = await data.collection(process.env.DB_COL_USER).findOne(filter, options);
    return result;
}


/*Operation for Cabinets*/
/* 
----------------------------------------------
    1.info={
    "email" : "doc@gmail.com",
    "name" : "doctime",
    "phone_number" : "0711111111",
    "specialization" : [ 
        "spate", 
        "fata", 
        "mijloc"
    ],
    "rating" : {
        "points" : 100,
        "number_review" : 10,
        "comments" : [ 
            "nu e bun", 
            "e asa fain"
        ]
    },
    "location" : {
        "long" : "",
        "lat" : ""
    }}
-----------------------------------------------
    2.email="doc@gmail.com"
-----------------------------------------------
    3.infoUp={$set: {"name": "DocTimeDDD"}}
*/
async function insertCabinet(info) {
    const data = await connect();
    const result = await data.collection(process.env.DB_COL_CAB).insertOne(info, function(err, res) {
        if (err) throw err;
        close();
    });
}

async function changecabinet(email, infoUp) {
    const data = await connect();
    const id = await searchCabinet(email);
    const options = { upsert: false };
    const result = await data.collection(process.env.DB_COL_CAB).updateOne(id, infoUp, options);
    close();
}

async function searchCabinet(email) {
    const data = await connect();
    const filter = { email: `${email}` }
    const options = {
        projection: { _id: 1 }
    };
    const result = await data.collection(process.env.DB_COL_CAB).findOne(filter, options);
    return result;
    //return await --->>>
}

function listCab(position){
    
    return new Promise(async (resolve,reject)=>{
        const data = await connect();
        const filter = {
            "$and": [{"lat":{ "$lt" : position.lat+20}}],
            "$and": [{"long":{ "$lt" : position.lng+20}}],
            "$and": [{"long":{ "$gt" : position.lng-20}}],
            "$and": [{"lat":{ "$gt" : position.lng-20}}]
          
           
        }
        const result = await data.collection(process.env.DB_COL_CAB).find(filter);
        
            resolve(result);
        
        
    });
    
}

/*Operation for Docs*/
/* 
----------------------------------------------
    1.info={
    "id_cabinet" : "1",
    "email" : "doctor@gmail.com",
    "name" : "Doc",
    "surname" : "SurDoc",
    "phone_number" : "074242425",
    "specialization" : [ 
        "spate", 
        "fata", 
        "mijloc"
    ],
    "description" : "",
    "rating" : {
        "points" : 100,
        "number_review" : 10,
        "comments" : [ 
            "nu e bun", 
            "e asa fain"
        ]
    }}
-----------------------------------------------
    2.email="doctor@gmail.com"
-----------------------------------------------
    3.infoUp={$set: {"name": "Alin"}}
*/
async function insertDoc(info) {
    const data = await connect();
    const result = await data.collection(process.env.DB_COL_DOC).insertOne(info, function(err, res) {
        if (err) throw err;
        close();
    });
}

async function changeDoc(email, info) {
    const data = await connect();
    const id = await searchDoc(email);
    const options = { upsert: false };
    const result = await data.collection(process.env.DB_COL_DOC).updateOne(id, info, options);
    close();
}

async function searchDoc(email) {
    const data = await connect();
    const filter = { email: `${email}` }
    const options = {
        projection: { _id: 1 }
    };
    const result = await data.collection(process.env.DB_COL_DOC).findOne(filter, options);
    return result;
}


/* Operations for appointments */
/* 
----------------------------------------------
    1.info={
    "date" : "12-07-2021",
    "hour" : "14:00-18:20",
    "user_id" : "60afb7020090355dae83eac3",
    "medic_id" : "60afbd370090355dae85dbdc",
    "status" : "Done"}
-----------------------------------------------
    2.infoApp={
    emailUser: "a@gmail.com",
    emailDoc: "doc@gmail.com",
    dataApp: "12-07-2021",
    hourApp:"14:00-18:20"}
-----------------------------------------------
    3.infoUp={$set: {"status": "Done"}}
*/

async function insertAppointment(info) {
    const data = await connect();
    const result = await data.collection(process.env.DB_COL_APP).insertOne(info, function(err, res) {
        if (err) throw err;
        close();
    });
}

async function changeAppointment(infoApp, infoUp) {
    const data = await connect();
    const id = await searchAppointment(infoApp);
    const options = { upsert: false };
    const result = await data.collection(process.env.DB_COL_APP).updateOne(id, infoUp, options);
    close();
}

function searchAppointment(infoApp) {
    return new Promise(async (resolve,reject)=>{
        const data = await connect();
        const id1 = await searchUser(infoApp.emailUser);
        const id2 = await searchDoc(infoApp.emailDoc);
        const filter = {
            user_id: `${id1._id}`,
            medic_id: `${id2._id}`,
            date: `${infoApp.dataApp}`,
            hour: `${infoApp.hourApp}`
        }
        const options = {
            projection: { _id: 1 }
        };
        const result = await data.collection(process.env.DB_COL_APP).findOne(filter, options);
        close();
        resolve(result); 
    })
    
}

async function deleteAppointment(infoApp) {
    const data = await connect();
    const id1 = await searchUser(infoApp.emailUser);
    const id2 = await searchDoc(infoApp.emailDoc);
    const filter = {
        user_id: `${id1._id}`,
        medic_id: `${id2._id}`,
        date: `${infoApp.dataApp}`,
        hour: `${infoApp.hourApp}`
    }
    const result = await data.collection(process.env.DB_COL_APP).deleteOne(filter);
    close();
    return result;

}


/* Operations for Feed*/
/*
------------------------------------------
1.infoPost = {
    "id_user": "60afb7020090355dae83eac3",
    "title": "durere de cap",
    "description": "durere de cap",
    "likes": 10,
    "dislikes": 12
}

2.infoCom = {
    "date": "30-02-1998",
    "emailUser": "a@gmail.com",
    "nameUser": "Alex",
    "surnameUser": "Dinu",
    "comm": "mars",
    "titlePost": "durere de cap"
}

3.searchPostInfo={
    emailUser:"", cel care a creat postarea 
    titlePost:""

}

4. selectPost={
    emailUser :"", cel care a creat postarea
    titlePost:""
}
*/

async function insertPost(infoPost) {
    const data = await connect();
    const result = await data.collection(process.env.DB_COL_FEED).insertOne(infoPost, function(err, res) {
        if (err) throw err;
        close();
    });
}

async function searchPost(searchPostInfo) {
    const data = await connect();
    const idUser = await searchUser(searchPostInfo.emailUser);
    const filter = { id_user: `${idUser._id}`, title: `${searchPostInfo.titlePost}` }
    const options = {
        projection: { _id: 1 }
    };
    const result = await data.collection(process.env.DB_COL_FEED).findOne(filter, options);
    close();
    return result;

}
async function insertComment(infoCom) {
    const data = await connect();
    const search = {
        emailUser: `${infoCom.emailUser}`,
        titlePost: `${infoCom.titlePost}`
    };

    //console.log();
    const post = await searchPost(search);

    const infoComFinal = {
        "post_id": `${post._id}`,
        "date": `${infoCom.date}`,
        "responser_email": `${infoCom.emailUser}`,
        "name": `${infoCom.nameUser}`,
        "surname": `${infoCom.surnameUser}`,
        "comms": `${infoCom.comm}`
    }
    console.log(infoComFinal);
    const result = await data.collection(process.env.DB_COL_COMM).insertOne(infoComFinal, function(err, res) {
        if (err) throw err;
        close();
    });
}

async function selectComments(selectPost) {
    const data = await connect();
    const idPost = await searchPost(selectPost);
    const sort = { date: -1 };
    const options = {
        projection: {
            date: 1,
            comms: 1,
            responser_email: 1,
            name: 1,
            surname: 1
        }
    };
    const filter = {
        post_id: `${idPost._id}`,
    }
    console.log(filter);
    const result = await data.collection(process.env.DB_COL_COMM).find(filter, options).sort(sort);
    close();
    await result.forEach(doc => console.log(doc));
    return result;

}


module.exports = { listCab,getAllUsers};