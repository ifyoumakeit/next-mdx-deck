import React from "react";
import App, { Container } from "next/app";
import { MDXDeck } from "@mdx-deck/components";

class MyApp extends App {
  render() {
    const { Component, router } = this.props;
    return (
      <Container>
        <Component
          components={{
            wrapper(props) {
              return (
                <MDXDeck
                  {...props}
                  basepath={router.route
                    .split("/")
                    .slice(0, 2)
                    .join("/")}
                />
              );
            }
          }}
        />
      </Container>
    );
  }
}

export default MyApp;
