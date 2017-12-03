import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

const SortContainer = styled.div`
  display: inline-flex;
  height: 1em;

  margin: 2em auto;
  padding-bottom: 2em;
  margin-bottom: 0;

  > span {
    margin-right: 0.5em;
  }
  .categories {
    white-space: nowrap;
    span {
      margin-right: 1em;
      padding: 0.5em;
      border-radius: 1em;
      background: ${COLOR.lightGray};
      cursor: pointer;
      transition: 0.2s ease all;
      &.active {
        background: ${COLOR.cyan};
        color: ${COLOR.white};
      }
    }
  }
`;

export default ({ options, current, onClick }) => {
  return (
    <SortContainer>
      <span>Sort by:</span>
      <div className="categories">
        {options.map(option => (
          <span
            className={current === option.id ? 'active' : ''}
            onClick={() => onClick(option.id)}
            key={option.id}
          >
            {option.name}
          </span>
        ))}
      </div>
    </SortContainer>
  );
};
