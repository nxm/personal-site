import { Icon } from '@iconify/react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledIcon = styled(Icon) <{ highlight?: string }>`
a:visited { 
    text-decoration: none; 
   }
    :hover {
        color: ${({ highlight }) => (highlight)};
    }
}
`

const WrappedIcon: React.FC<{ icon: string, href: string, highlight?: string }> = ({ icon, href, highlight }) => (
    <Link href={href} style={{ 'textDecoration': 'none', color: 'black' }}>
        <StyledIcon width={'2em'} icon={icon} highlight={highlight} />
    </Link>
);

export function SocialsComponent(): React.ReactElement {

    return (
        <>
            <WrappedIcon icon="akar-icons:instagram-fill" href='https://instagram.com/x86' highlight="#C82584" data-tip="banned" data-tooltip-content="hello world" />
            <WrappedIcon icon="akar-icons:github-fill" href='https://github.com/nxm' highlight={'#2d3436'} />
            <WrappedIcon icon="akar-icons:linkedin-box-fill" href='https://linkedin.com/in/nxm' highlight="#0B65C2" />
            <WrappedIcon icon="ant-design:mail-outlined" href='mailto:szturomski@jakub.app' highlight={'#e17055'} />
            <WrappedIcon icon='ph:currency-dollar' href='https://buycoffee.to/x86' highlight={'#00FF00'} />
        </>
    );
}