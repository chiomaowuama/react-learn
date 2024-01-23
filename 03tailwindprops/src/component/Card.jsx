import React from 'react'

 function Card({username="HC" , post="not recorded yet"}) {
    // console.log()
  return (

        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  /> 
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam accusamus vero, voluptas provident ipsum harum sit animi magni aperiam quos accusantium pariatur, nihil exercitationem? Iste iure animi error corporis maxime.
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                     {username || "sweety"}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {post}
                    </div>
                    </figcaption>
                </div>
            </figure>

        </div>
    )
}
export default Card
