import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Global } from "@emotion/core";
import globalStyles from 'styles/global';
import typeStyles from 'styles/typography';
import dimensions from "styles/dimensions";
import Footer from "components/Footer";
import Header from "components/Header";
import 'styles/fonts.scss';

export const LayoutContainer = styled.div`
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    margin: 0 auto;

    margin-top: 3em;
    margin-bottom: 3em;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
    }
`;

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
                footerJson {
                    email
                    facebook {
                        url
                    }
                    linkedin {
                        url
                    }
                    instagram {
                        url
                    }
                    twitter {
                        url
                    }
                    github {
                        url
                    }
                    chapter {
                        url
                    }
                    constitution {
                        url
                    }
                    swag {
                        url
                    }
                    style {
                        url
                    }
                    replit {
                        url
                    }
                }
            }
        `}
        render={data => (
            <div>
                <Header />
                <Global styles={[globalStyles, typeStyles]} />
                <div className="Layout">
                    <main className="Layout__content">
                        {children}
                    </main>
                </div>
                <Footer {...data.footerJson} />
            </div>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
