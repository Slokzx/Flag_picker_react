import React from 'react'

const Continents = (props) => {
  return (
    <div>
        <datalist id={props.data}>
          {props.resultsContinents.map((r,i) =>
              <option value={r.continent} key={i}/>
          )}
        </datalist>
    </div>
  )
}

export default Continents