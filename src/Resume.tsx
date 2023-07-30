import styled from '@emotion/styled';
import { info, work } from './data/ResumeData';
import name from './images/name1.svg';

const theme = {
  primary: '#3E9A9E',
  secondary: '#FF6561',
};

const Resume: React.FC = () => {
  const listSkills = info.skills.map((x) => (
    <div style={{ display: 'grid' }} key={x}>
      {x}
    </div>
  ));

  const listWork = work.map((x, index) => (
    <div key={index} style={{ display: 'grid', gap: '16px' }}>
      <div
        key={index}
        style={{ display: 'flex', gap: '8px', margin: '0 0 0 16px' }}
      >
        <span style={{ color: `${theme.secondary}`, fontWeight: 'bold' }}>
          {x.company}
        </span>
        <DurationStyle>| {x.location} |</DurationStyle>
        <DurationStyle>{x.duration}</DurationStyle>
      </div>

      <Body style={{ margin: '0 0 0 16px' }}>
        {x.title.map(({ title, duration }, index) => (
          <div key={title} style={{ display: 'flex', gap: '8px' }}>
            {index === 0 ? (
              <>
                <span style={{ color: `${theme.secondary}` }}>{title}</span>
                <DurationStyle>|</DurationStyle>
                <DurationStyle> {duration}</DurationStyle>
              </>
            ) : (
              <>
                <span>{title}</span>
                <DurationStyle style={{ color: `${theme.primary}` }}>
                  |
                </DurationStyle>
                <DurationStyle style={{ color: `${theme.primary}` }}>
                  {duration}
                </DurationStyle>
              </>
            )}
          </div>
        ))}
      </Body>
      <div style={{ display: 'grid', gap: '8px', margin: '0 0 0 16px' }}>
        {x.description.map((x) => (
          <Body style={{ display: 'flex', gap: '8px' }}>
            <DurationStyle style={{ fontStyle: 'normal' }}>#</DurationStyle>
            {x}
          </Body>
        ))}
      </div>
    </div>
  ));

  return (
    <Container>
      <img alt='' src={name} style={{ padding: '32px 0 0 0' }} />

      <div style={{ display: 'grid', gap: '24px' }}>
        <Header># contact</Header>
        <Body>
          <div>{info.contact}</div>
          <div>{info.location}</div>
          <div>
            <LinkStyle href={info.linkedin}>
              linkedin.com/in/amandasnoww
            </LinkStyle>
          </div>
          <div>
            <LinkStyle href={info.github}>github.com/amandasaenz</LinkStyle>
          </div>
        </Body>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        <Header># skills</Header>
        <Body>{listSkills}</Body>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        <Header># education</Header>
        <Body>
          <div>{info.degree}</div>
          <div>
            <DurationStyle>@ {info.school}</DurationStyle>
          </div>
        </Body>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        <Header># experience</Header>
        {listWork}
      </div>
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  display: grid;
  gap: 64px;
  padding-top: 64px;
  grid-template-columns: 1fr;
  color: ${theme.primary};
  max-width: 500px;
`;

const Header = styled.div`
  font-weight: bold;
  color: ${theme.secondary};
  margin: 0;
`;

const Body = styled.div`
  line-height: 180%;
`;

const LinkStyle = styled.a`
  color: ${theme.secondary};
  text-decoration: none;
  margin: 8px 0;
  border-bottom: 1px solid ${theme.secondary};
  padding-bottom: 1px;
  -webkit-tap-highlight-color: transparent;
`;

const DurationStyle = styled.span`
  font-style: italic;
  font-size: 14px;
  color: ${theme.secondary};
`;
