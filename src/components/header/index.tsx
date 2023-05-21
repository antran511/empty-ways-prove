import {
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderProps,
    EuiHeaderSections,
  } from '@elastic/eui';

export const Header = () => {
  const sections: EuiHeaderSections[] = [
  {
    items: [<EuiHeaderLogo>Elastic</EuiHeaderLogo>],
    borders: 'right',
  },
  ];
  return (
    <EuiHeader position='static' sections={sections} />
  );
}