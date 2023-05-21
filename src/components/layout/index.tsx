import {
  EuiText,
  EuiPageTemplate,
  EuiPageTemplateProps,
  EuiPageHeaderProps,
  EuiPageSidebarProps,
} from '@elastic/eui';
import { ReactElement } from 'react';
import { Menu } from '../menu';
import { Header } from '../header';
import { useResource } from "@refinedev/core";

export const Layout = ({
  children,
  button = <></>,
  content = <></>,
  sidebar = <Menu />,
  panelled,
  bottomBorder = true,
  sidebarSticky,
  offset,
  grow,
}: {
  children?: ReactElement;
  button?: ReactElement;
  content?: ReactElement;
  sidebar?: ReactElement;
  panelled?: EuiPageTemplateProps['panelled'];
  bottomBorder?: EuiPageTemplateProps['bottomBorder'];
  // For fullscreen only
  sidebarSticky?: EuiPageSidebarProps['sticky'];
  offset?: EuiPageTemplateProps['offset'];
  grow?: EuiPageTemplateProps['grow'];
}) => {
  const { resource } = useResource();
  const header : EuiPageHeaderProps = {  paddingSize: "l", pageTitle: resource?.meta?.label }
  return (
    <div className="">
      <Header />
      <EuiPageTemplate
        panelled={panelled}
        bottomBorder={bottomBorder}
        grow={grow}
        offset={offset}
        restrictWidth={false}
      >
      {sidebar && (
        <EuiPageTemplate.Sidebar sticky={sidebarSticky}>
          {sidebar}
        </EuiPageTemplate.Sidebar>
      )}
      {header && (
        <EuiPageTemplate.Header {...header} rightSideItems={[button]} />
      )}

      <EuiPageTemplate.Section>{children}</EuiPageTemplate.Section>
    </EuiPageTemplate>
    </div>
  );
};
