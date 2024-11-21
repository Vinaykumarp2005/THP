import React from 'react'
import { useContext } from 'react'
import {counterContextObj} from '../../contexts/CounterContext'
function Home() {
  const {counter,setCounter}=useContext(counterContextObj)

  return (
    <div className='container'>
      <h2>Home</h2>
      <h1>Counter :{counter}</h1>
      <button className="btn btn-warning" onClick={()=>setCounter(counter+1)}>Increment</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repudiandae inventore vitae quaerat quo maxime vero sit magnam fuga temporibus, culpa corrupti dignissimos aut obcaecati reiciendis, suscipit dolore consequatur! Eius doloribus in inventore velit vero molestiae fugiat consequatur facilis, maxime laboriosam accusamus iure nam libero beatae debitis eum sequi quidem sint dolorum suscipit aperiam, illum non nostrum iusto. Molestias reiciendis natus nulla quisquam? Amet dolores in fuga mollitia veritatis eaque ullam natus nostrum minima consequuntur aliquid modi, illo ea reiciendis incidunt. Reiciendis necessitatibus ipsum facere cum eligendi? Consequuntur aut nulla quod voluptatum libero ipsum ipsa porro iure error ipsam aspernatur iusto molestiae dolores, laborum eveniet non cumque totam expedita sed beatae maxime corporis illum? Vero illum ipsa optio debitis nobis, impedit illo? Tempora velit porro temporibus deleniti iure rerum exercitationem. Rerum alias, soluta nihil autem possimus minima mollitia facere id tenetur sed modi perferendis impedit quisquam nulla eligendi consequatur quo aut magnam voluptate velit, consectetur cupiditate enim tempora! Distinctio, vero cupiditate ipsum perferendis, tenetur reprehenderit, alias nesciunt cum non eligendi debitis dolor laudantium excepturi. Eum obcaecati accusantium, quasi minus omnis autem dicta praesentium tempora, molestias distinctio a rerum illum cupiditate hic ipsam voluptates doloremque repellat tempore, aperiam nostrum. Fuga, vitae.</p>
    </div>
  )
}

export default Home
