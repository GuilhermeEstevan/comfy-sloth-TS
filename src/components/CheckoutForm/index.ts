import styled from "styled-components"

export const CheckoutFormContainer = styled.section`

width: 70vw;
max-width: 500px;

  form{
    width: 100%;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--clr-primary-1);
  }
label{
  width: 80%;
  font-weight: 600;
}

  .input{
    width: 100%;
    background: var(--clr-white);
    color: var(--clr-primary-1);
    border-radius: var(--radius);
    padding: 0.8rem;
    margin: 0.5rem 0;
    border: none;
    appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;  
    font-size: 1rem;
    
  }
  }

  
.expiration{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input{
    width: 50%;
    background: var(--clr-white);
    color: var(--clr-primary-1);
    border-radius: var(--radius);
    padding: 0.7rem;
    margin: 0.5rem 0;
    border: none;
    appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;  
    font-size: 1rem;
  }
  }

  #month,
  #year{
    margin: 0.5rem 0;
    height: 2.2rem;
    width: 8rem;
    font-size: 1.2rem;
    color: var(--clr-primary-1);
    border-color: transparent;
    border-radius: var(--radius);
  }
}
#month:hover,
#year:hover{
  border-color: black;
  transition: var(--transition);
}


  button{
      margin-top: 2rem;
      padding: 0.8rem 1rem;
      border: none;
      letter-spacing: 0.3rem;
      border-radius: var(--radius);
      cursor: pointer;
      text-transform: uppercase;
      line-height: 1.3rem;
  }
 
  @media screen and (min-width: 780px) {
    label{
      width: 100%;
    }
    .expiration{
      flex-direction: row;
    }
  }
`


 export const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    `