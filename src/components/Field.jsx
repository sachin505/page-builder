import React from 'react'

function Field({type,x,y,click,selected,id}) {
        const style = {
            position: 'absolute',
            left: x + 'px',
            top: y + 'px',
          };

  return (
    <div>
      {type=='Input' && 
        <input
         type='text'
         style={{...style,border:'1px black solid'}}
         draggable
         onFocus={()=>{click(id)}}
        />}
        {type == 'Button' &&
          <input 
          type='submit'
          style={{...style,border: selected === true ? '2px orange solid':'1px black solid',cursor:'pointer'}}
          value='button'
          draggable
          onFocus={()=>{click(id)}}
          />
        }
        {type == 'Label' && 
          <label 
          style={{...style,border: selected === true ? '2px orange solid':'',cursor:'pointer'}} 
          draggable
          onClick={()=>{click(id)}}
          >label</label>
        }
    </div>
  )
}

export default Field