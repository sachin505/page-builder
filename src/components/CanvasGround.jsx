import React, { useEffect, useRef, useState } from 'react'
import './Modal.css'
import Field from './Field';


function CanvasGround() {
  const [elements,setElements] = useState([]);
  const [show,setShow]=useState(false);
  const [widgetType,setWidgetType] = useState();
  const [xcor,setXCor] = useState(0);
  const [ycor,setYCor] = useState(0);
  const [selectedElement,setSelectedElement]=useState();

  

  const closeModal = () =>{
    setShow(false);

    const config = {
      widgetType: widgetType,
      id:elements? elements.length : 0,
      xcor: xcor,
      ycor: ycor,
      selected:false   
    }
    if(selectedElement){
      const newElements = elements;
      newElements.forEach((element)=>{
        if(selectedElement.id === element.id){
          element.xcor=xcor;
          element.ycor=ycor;
        }
      });
      setElements(newElements);
    }
    else{
      setElements([...elements,config])
    }
  }

  const handleOnDragOver = (e) => {
    e.preventDefault();
  }

  
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
        setShow(true);
        setXCor(selectedElement.xcor);
        setYCor(selectedElement.ycor);
    }
    
  }

  const handleOnDrop = (e) => {
    setShow(true)
    setWidgetType(e.dataTransfer.getData("widgetType"));
    setXCor(e.clientX);
    setYCor(e.clientY);
  }

  const handleSelect = (id) => {
    const newElements = elements;
    let isSelected=false;
    let updatedElement={};
    newElements.forEach((element)=>{
      if(element.id === id){
        element.selected = !element.selected
        isSelected=element.selected;
        updatedElement = element;
      }
      else{
        element.selected=false;
      }
    })
    setElements(newElements);
    if(isSelected){
      setSelectedElement(updatedElement);
    }
    else{
      setSelectedElement();
    }
    
  }
  console.log(elements)
  return (
    <div className='h-screen bg-gray-100 w-screen' 
    onDrop={(e)=>{handleOnDrop(e)}} 
    onDragOver={(e)=>{handleOnDragOver(e)}}
    tabIndex={0}
    onKeyDown={handleKeyPress}
    >
      {/* Modal code*/}
        {show && 
        <div className="modal">
        <div className="modal-content">
        {widgetType && <div className='flex flex-col'>
            <label>Text</label>
            <input type='text' 
              value={widgetType} 
              className='border border-gray-300 rounded-md py-2 px-4' 
              onChange={(e)=>{setWidgetType(e.target.value)}}
            />
          </div>}

          <div className='flex flex-col'>
            <label>X</label>
            <input type='text'
              value={xcor} 
              className='border border-gray-300 rounded-md py-2 px-4' 
              onChange={(e)=>{setXCor(e.target.value)}}
            />
          </div>

          <div className='flex flex-col'>
            <label>Y</label>
            <input type='text' value={ycor} 
              className='border border-gray-300 rounded-md py-2 px-4' 
              onChange={(e)=>{setYCor(e.target.value)}}
            />
          </div>
          
          <button onClick={closeModal} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>SAVE</button>
        </div>
        </div>} 
        {/*elemnets to render on canvas*/}
        {elements.map((config)=>
        <Field type={config.widgetType} 
               x={config.xcor} 
               y={config.ycor}  
               key={config.id}
               id={config.id}
               selected={config.selected}
               click={handleSelect}
          />)}
    </div>
  )
}

export default CanvasGround