import React from 'react'

const Continents = (props) => {
  let divStyles = {
    overflow: 'auto'
  }

  return (
    <div style={divStyles}>
        <datalist id={props.data}>
          {props.resultsContinents.map((r,i) =>
              <option value={r.continent} key={i}/>
          )}
        </datalist>
    </div>
  )
}

export default Continents