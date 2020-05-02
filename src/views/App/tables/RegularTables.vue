<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <base-v-component
      heading="Simple Tables"
      link="components/simple-tables"
    />
<v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card color="primary">
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Vuetify Material Dashboard
            </div>

            <div class="subtitle-1 font-weight-light">
              Are you looking for more components? Please check our Premium Version of Vuetify Material Dashboard
            </div>
          </template>

          <v-simple-table>
            <thead>
              <tr>
                <th />
                <th class="subheading font-weight-light text-center">
                  Free
                </th>
                <th class="subheading font-weight-light text-center">
                  PRO
                </th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <th class="text-left font-weight-light subtitle-1">
                  Components
                </th>
                <td>60</td>
                <td>200</td>
              </tr>
              <tr>
                <th class="text-left font-weight-light subtitle-1">
                  Plugins
                </th>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <th class="text-left font-weight-light subtitle-1">
                  Example Pages
                </th>
                <td>3</td>
                <td>8</td>
              </tr>
              <tr>
                <th class="text-left font-weight-light subtitle-1">
                  Login, Register, Pricing, Lock Pages
                </th>
                <td>
                  <v-icon color="error">
                    mdi-close
                  </v-icon>
                </td>
                <td>
                  <v-icon color="success">
                    mdi-check
                  </v-icon>
                </td>
              </tr>
              <tr>
                <th class="text-left font-weight-light subtitle-1">
                  Premium Support
                </th>
                <td>
                  <v-icon color="error">
                    mdi-close
                  </v-icon>
                </td>
                <td>
                  <v-icon color="success">
                    mdi-check
                  </v-icon>
                </td>
              </tr>
              <tr>
                <th />
                <td>Free</td>
                <td>Just for <b class="subheading">$79</b></td>
              </tr>
              <tr>
                <th />
                <td>
                  <v-btn
                    color="grey"
                    disabled
                  >
                    Current Version
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    color="success"
                    target="_blank"
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"
                  >
                    Upgrade to Pro
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
    <base-material-card
      icon="mdi-clipboard-text"
      title="Simple Table"
      class="px-5 py-3"
    >
    
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              Name
            </th>
            <th class="primary--text">
              Country
            </th>
            <th class="primary--text">
              City
            </th>
            <th class="text-right primary--text">
              Salary
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td class="text-right">
              $36,738
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Minverva Hooper</td>
            <td>Curaçao</td>
            <td>Sinaas-Waas</td>
            <td class="text-right">
              $23,789
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Sage Rodriguez</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td class="text-right">
              $56,142
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Philip Chaney</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td class="text-right">
              $38,735
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>Doris Greene</td>
            <td>Malawi</td>
            <td>Feldkirchen in Kärnten</td>
            <td class="text-right">
              $63,542
            </td>
          </tr>

          <tr>
            <td>6</td>
            <td>Mason Porter</td>
            <td>Chile</td>
            <td>Gloucester</td>
            <td class="text-right">
              $78,615
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <base-material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="Table on Dark Background"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th class="text-right">
              Salary
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Dakota Rice</td>
            <td>Niger</td>
            <td>Oud-Turnhout</td>
            <td class="text-right">
              $36,738
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Minverva Hooper</td>
            <td>Curaçao</td>
            <td>Sinaas-Waas</td>
            <td class="text-right">
              $23,789
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Sage Rodriguez</td>
            <td>Netherlands</td>
            <td>Baileux</td>
            <td class="text-right">
              $56,142
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Philip Chaney</td>
            <td>Korea, South</td>
            <td>Overland Park</td>
            <td class="text-right">
              $38,735
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>Doris Greene</td>
            <td>Malawi</td>
            <td>Feldkirchen in Kärnten</td>
            <td class="text-right">
              $63,542
            </td>
          </tr>

          <tr>
            <td>6</td>
            <td>Mason Porter</td>
            <td>Chile</td>
            <td>Gloucester</td>
            <td class="text-right">
              $78,615
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
  </v-container>
</template>
