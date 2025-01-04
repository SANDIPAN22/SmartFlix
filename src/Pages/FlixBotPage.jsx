import { useState } from "react"
import OpenAI from 'openai';
import { SiRobotframework } from "react-icons/si";
const client = new OpenAI({
  apiKey: process.env.REACT_APP_OAI_AK, 
  dangerouslyAllowBrowser: true
});
const FlixBotPage = () => {

  const [search, setSearch] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const askGPT = async() => {
    console.log(search)
    if(!search){
      alert("Write something about your genres ...")
      return
    }
    setAnswer("")
    setLoading(true)
    const query = `Work as Movie suggestion model and suggest maximum 10 movies in a comma separated way based on my query: ${search}`
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: query }],
      model: 'gpt-4o-mini',
    });
    setAnswer(chatCompletion.choices[0].message.content)
    setLoading(false)
  }

  return (
    <div className="max-w-[375px] md:max-w-[675px]" >
    <div className="font-bold text-xl md:text-4xl text-white mt-14 m-4">
      Ask AI for Any Movie Suggestion
    </div>
    <div className="flex justify-center items-center">
      <input type="text" className="w-3/4 m-4 p-2" placeholder="What's on your mind to watch..." value={search} onChange={e=> setSearch(e.target.value)}/>
      <button type="button" className="bg-red-500 w-1/4 h-12 text-xl font-bold" onClick={askGPT} disabled={loading}> {loading ? 'Loading': 'Ask'}</button>
    </div>
    {answer && <div className="bg-black bg-opacity-80 p-8">
        <p className="text-white m-2  text-xl "> <b className="text-5xl">"</b> {answer} </p>
    </div>}
    
    </div>
  )
}

export default FlixBotPage