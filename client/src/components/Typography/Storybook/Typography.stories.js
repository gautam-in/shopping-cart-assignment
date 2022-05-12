import H1  from '../H1';
import H2  from '../H2';
import H3  from '../H3';
import H4  from '../H4';
import H5  from '../H5';
import H6  from '../H6';
import P  from '../P';

export default {
  title: 'Sabka Bazar/Atoms/Typography',
};

const TypographyStory = () => (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <H1>HEADER 1</H1>
        <H2>HEADER 2</H2>
        <H3>HEADER 3</H3>
        <H4>HEADER 4</H4>
        <H5>HEADER 5</H5>
        <H6>HEADER 6</H6>
        <P>PARAGRAPH</P>
    </div>
);

export const Typography = TypographyStory.bind({});
