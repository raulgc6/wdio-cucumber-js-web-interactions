Feature: Open a webpage and interact with products

    Scenario Outline: The webpage is opened
        Given the following URL is opened: <URL>
        And the user accept cookies
        When the user clicks in <Boton>
        Then the URL contains <Texto URL>


        Examples:
            | URL         | Boton                    | Texto URL           |
            | 'www.lidl.es' | 'verTodasOfertas' | 'todas-las-ofertas' |



    # Scenario Outline: A especific section is displayed with <Areas> Areas
    #     Given the following URL is opened: <URL>
    #     When the user clicks in 'Menu'
    #      And the user hover in <Category> category
    #      And the user clicks in <Section> section
    #     Then the URL contains <Texto URL>
    #      And <Areas> areas are displayed in the section

    #     Examples:
    #         | URL         | Category    | Section   | Texto URL     | Areas     |
    #         | www.lidl.es | 'Hogar'     | 'Baño'    | 'bano'        | '4'       |


    # Scenario Outline: Add the more expensive product to the cart in black color
    #     When the following URL is opened: <URL>
    #     Then <Products> products are displayed in the section'
    #      And all products are online availables
    #      And log the products with discounts
    #      And add to the cart the more expensive product in <Color> color

    #     Examples:
    #         | URL                                               | Products      | Color     |
    #         | https://www.lidl.es/es/toallas-y-albornoces/c2555 | '20'          | 'Negro'   |


    # Scenario Outline: Add to the cart the product with more ratings
    #     When the following URL is opened: <URL>
    #     Then <Products> products are displayed in the section'
    #      And add to the cart the product with more ratings in <Color> color

    #     Examples:
    #         | URL                                               | Products      | Color     |
    #         | https://www.lidl.es/es/toallas-y-albornoces/c2555 | '20'          | 'Negro'   |

