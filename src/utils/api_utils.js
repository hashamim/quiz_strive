import axios from 'axios';

const TOKEN = "keyMzCEuHtCVq0od6";
const instance = axios.create({
  baseURL: "https://api.airtable.com/v0/apphyk5UMhdRIz9Ps",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json"
  }
})

export async function getQuizTemplates(){
  let res = await instance.get("/Quiz_Templates")
  return res.data.records;
}

export async function getQuizTemplate(id){
  let res = await instance.get(`/Quiz_Templates/${id}`);
  return res.data;
}

export async function postQuizTemplate(data){
  let res = await instance.post('Quiz_Templates/',
    {
      records: [
        {
          fields: data,
        }
      ]
    }
  )
  return res;
}

export async function postQuizResponse(data){
  let res = await instance.post('Quiz_Responses/',
    {
      records: [
        {
          fields: data,
        }
      ]
    }
  )
  return res.data.records;
}