import styled from '@emotion/styled';

export const ListItemInfo = styled('div')`
display: flex;
align-items: center;
column-gap:12px;
svg {
    width: 26px;
    height: 26px;
    fill: var(--primary-focus);
}
@media only screen and (min-width: 768px) {
svg {
    width: 36px;
    height: 36px;
}
}
`
export const ListItemVolume = styled('div')`
color: var(--primary-focus);
font-size: 18px;
line-height:140%;
`
export const ListItemTime = styled('div')`
color: var(--primary-dark);
font-size: 12px;
line-height: 200%;
`