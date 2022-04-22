import React from 'react';
import styled from 'styled-components';
import '../index.css';
import image from '../assets/pictures/nature.jpg';
import { typeScale } from '../utils';
import useFirestore from '../utils/hooks/useFirestore';
import { collection, query, getDocs} from 'firebase/firestore'
import { projectFirestore } from '../firebase/config';


const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 10px 10%;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5em;
`;

const ImageFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img``;

const Text = styled.div`
  color: ${(props) => props.theme.bodyTextColor};
  font-size: ${typeScale.header3};
  font-family: ${(props) => props.theme.bodyFont};
  font-weight: bold;
  cursor: none;
  letter-spacing: 0.085em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
  overflow: auto;
`;

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
        <Text>Black and White</Text>
        <Text>Color</Text>
      </Flex>
      <Container>
        {snaps.map((doc, i) => 
          <ImageFlex key={i}><Image src={doc.url}/></ImageFlex>
          )
        }
      </Container>
    </Grid>
  );
};

export default Gallery;
