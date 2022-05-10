import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
`;

export const HeaderLeft = styled.div`

   h3{
    font-size: 32px;
  }
`;
export const FormLeft = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 50%;
  padding-right: 10%;
  border-right: 2px solid #DDDDDD ;

  .header{
    font-size: 20px;
    padding:15px 0px;
  }

  .buttonsubmit{
    font-size: 16px;
    padding: 6px 28px;
    width: 50%;
    margin-left: 50%;
    margin-top: 5%;
    background-color: #97b3c8;
    border: none;
    border-radius: 10px;
  }
  .buttonsubmit:hover {
    background-color: #0AA1DD;
    color: white;
  }
  .textbox{
    margin-top: 5%;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 8px 24px;
    
  }
  `;


export const ContentLeft = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`;


export const ContentRight = styled.div`
  margin-left: 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

`;