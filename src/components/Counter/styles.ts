import styled from 'styled-components'

export const CounterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray300};
  padding: 0.5rem;
  border-radius: 6px;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  button {
    line-height: 0;
    background: none;
    border: none;

    color: ${({ theme }) => theme.colors.secondary500};

    transition: color 0.15s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary700};
    }
  }

  span {
    width: 100%;
    min-width: 1.25rem;
    color: ${({ theme }) => theme.colors.gray800};
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
