import styled from 'styled-components';
import constants from 'constants';

const COLOR = constants.STYLE_VARS.colors;

const SortContainer = styled.div`
  display: inline-flex;
  height: 1em;

  margin: 2em auto;
  padding-bottom: 2.5em;
  margin-bottom: 1em;

  border-bottom: 1px solid lightgray;
  width: calc(100% - 10vw);

  > span {
    margin-right: 0.5em;
    white-space: nowrap;
  }
  .categories {
    white-space: nowrap;
    span {
      &:not(:last-child) {
        margin-right: 1em;
      }
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
