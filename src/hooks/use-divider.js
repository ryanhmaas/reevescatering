import { useStaticQuery, graphql } from "gatsby"

export const useDivider = () => {
  const divider = useStaticQuery(
    graphql`
      query GetDivider {
        dividerDiamonds: contentfulAsset(title: {eq: "Green Diamonds"}){
          file{
            url
          }
        }
      }
    `
  )
  return divider.dividerDiamonds;
}