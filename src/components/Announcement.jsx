import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size 18px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders over $800
    </Container>
  )
}

export default Announcement
