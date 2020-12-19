import React from 'react';



const List =({people,setPeople})=>{
    const deletePersonHandler = (id)=>{
        let newPerson = people.filter((person)=>{
            return person.id !== id
        })
        return setPeople(newPerson)
    }
    return(
        <div>
            {people.map((person)=>{
              const {name,age,image,id} = person
              return(
                  <article key={id} className="person">
                      <img src={image} alt={name}/>
                      <div>
                          <h4>{name}</h4>
                          <p>{age} Years Old</p>
                          <div className="btn-right">
                              <input onClick={()=>deletePersonHandler(id)} type="button" value="Remove"/>
                          </div>
                      </div>
                  </article>
              )
            })}
        </div>
    )
}




export default List