import React from 'react';
import styled from 'styled-components';
import '../index.css';
import { typeScale } from '../utils';
import image from '../assets/pictures/nature.jpg';
import { collection, query, getDocs} from 'firebase/firestore'
import { projectFirestore } from '../firebase/config';
import { Link } from 'react-router-dom';


const Gallery = () => {
  let [snaps, setSnaps] = React.useState([]);
  let bla = []
  const unsub = query(collection(projectFirestore, 'color'))


  React.useEffect(() => {
    getDocuments()
  }, [snaps])

  const getDocuments = async () => {
    const querySnapshot = await getDocs(unsub);
    querySnapshot.forEach(snap => bla.push(snap.data()));
    setSnaps(bla);
  }

  return (
    <Grid>
      <Flex>
        <Link to="/Gallery?=baw"><Text>Black and White</Text></Link>
        <Link to="/Gallery?=color"><Text>Color</Text></Link>
      </Flex>
        {console.log(snaps)}
        <ImageFlex>
          <Image src={image}/>
          <CategoryText style={{position: "absolute"}}>Color</CategoryText>
        </ImageFlex>
    </Grid>
  );
};


const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 10px ;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5em;
`;

const ImageFlex = styled.div`
  position: relative; 
  width:600px ;
`;

const Image = styled.img`
object-fit: fill; 
`;

const Text = styled.div`
  color: ${(props) => props.theme.bodyTextColor};
  font-size: ${typeScale.header3};
  font-family: ${(props) => props.theme.bodyFont};
  font-weight: bold;
  cursor: none;
  letter-spacing: 0.085em;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
`;

const CategoryText = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  color: red;

  &:hover {
    opacity: 1;
  }
`
export default Gallery;
