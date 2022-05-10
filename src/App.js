import './App.css';
import { Container, Content, ContentLeft, ContentRight, FormLeft } from './style/ElementStyle'
import React, { useState } from 'react'
import parse from 'html-react-parser'
import styled from './style/table.css'

function App() {
  const [Input, setInput] = useState('')
  let PosX = 0;
  let PosY = 0;
  let Direction = "up";
  const [CurrentPos, setCurrentPos] = useState([0, 0])
  const [showTable, setshowTable] = useState('')

  const CheckPos = (e) => {
    e.preventDefault();
    for (let i = 0; i < Input.length; i++) {
      if (Input[i] === "W") {
        if (Direction === "up") {
          PosY++
          setCurrentPos([PosX, PosY])
        } else if (Direction === "left") {
          PosX--
          setCurrentPos([PosX, PosY])
        } else if (Direction === "down") {
          PosY--
          setCurrentPos([PosX, PosY])
        } else if (Direction === "right") {
          PosX++
          setCurrentPos([PosX, PosY])
        }
      }
      else if (Input[i] === "L") {
        if (Direction === "up") {
          Direction = "left";
        } else if (Direction === "left") {
          Direction = "down";
        } else if (Direction === "down") {
          Direction = "right";
        } else if (Direction === "right") {
          Direction = "up";
        }
      }
      else if (Input[i] === "R") {
        if (Direction === "up") {
          Direction = "right";
        } else if (Direction === "right") {
          Direction = "down"
        } else if (Direction === "down") {
          Direction = "left"
        } else if (Direction === "left") {
          Direction = "up"
        }
      }
    } createTable()
  };


  const createTable = () => {
    let tableHtml = '';
    let absX = (Math.abs(PosX))
    let absY = (Math.abs(PosY))
    let rangeTable = (Math.max(absX, absY))
    rangeTable = (rangeTable * 2) + 2;
    let centerTable = (Math.ceil(rangeTable**2)/2)
    console.log(centerTable);
    tableHtml = '<table id="myTable" border="1">';
    for (let i = 1; i < rangeTable; i++) {
      tableHtml += '<tr>';
      for (let j = 1; j < rangeTable; j++) {
        tableHtml += '<td id="t' + i + j + '" data-row="' + i + '" data-col="' + j + '"></td>';
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    setshowTable(tableHtml)
    return showTable;
  }

  return (
    <Container>
      <Content>
        <ContentLeft>
          <FormLeft onSubmit={CheckPos}>
            <div className='header'>Robot Walk</div>
            <div>คำสั่ง Robot Walk </div>
            <input type="text" className="textbox" pattern='[W,R,L]{1,}' value={Input} onChange={e => setInput(e.target.value.toUpperCase())} />
            <input type="submit" className='buttonsubmit' value="คำนวณ" />
          </FormLeft>
        </ContentLeft>
        <ContentRight>
          <p className='Pos'>ตำแหน่งปัจจุบัน  ({CurrentPos[0]} , {CurrentPos[1]})</p>
          <div>
            {parse(showTable)}
          </div>

        </ContentRight>
      </Content>
    </Container>
  );
}

export default App;
