import styled from 'styled-components'

interface HeadingProps {
  fontSize?: 'lg' | 'xl' | '3xl' | '4xl'
  fontWeight?: 'bold' | 'extraBold'
}

export const Heading = styled.h2<HeadingProps>`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.fontFamily.heading};
  font-weight: 700;
  line-height: 1.3;

  ${({ fontSize, theme }) =>
    fontSize && `font-size: ${theme.fontSize[fontSize]}`};

  ${({ fontWeight }) => fontWeight === 'extraBold' && ` font-weight: 800`};
`
