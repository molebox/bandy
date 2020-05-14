import * as React from "react";
import { ScrollView, View, FlatList } from "react-native";
// import BottomSheet from 'react-native-reanimated'
import BottomSheet from "reanimated-bottom-sheet";
import { Formik } from "formik";
import { AntDesign } from "@expo/vector-icons";

import { gql, useQuery } from "@apollo/client";
import MainContainer from "../components/app/containers/main-container";
import { Button, Text, useTheme, TextInput, Switch } from "react-native-paper";

export default function CreateItemScreen() {
  const { colors } = useTheme();

  return (
    <MainContainer>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "montserrat-regular",
            fontSize: 40,
            color: colors.primary,
          }}
        >
          Create an Ad
        </Text>
      </View>
      <View
        style={{
          backgroundColor: colors.background,
          height: 400,
          flex: 1,
          justifyContent: "space-evenly",
        }}
      >
        <Formik
          initialValues={{
            name: "",
            location: "",
            description: "",
            photo: "",
            contactByPhone: false,
            contactByEmail: false,
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <View
              style={{
                // justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  backgroundColor: colors.background,
                  width: 350,
                  // marginVertical: 40,
                }}
                mode="outlined"
                dense
                underlineColor={colors.accent}
                label="Name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <TextInput
                style={{
                  backgroundColor: colors.background,
                  width: 350,
                  // marginVertical: 40,
                }}
                mode="outlined"
                dense
                underlineColor={colors.accent}
                label="Location"
                onChangeText={handleChange("location")}
                onBlur={handleBlur("location")}
                value={values.location}
              />
              <TextInput
                style={{
                  backgroundColor: colors.background,
                  width: 350,
                  // marginVertical: 40,
                }}
                mode="outlined"
                dense
                multiline
                underlineColor={colors.accent}
                label="Description"
                numberOfLines={8}
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
              />

              <View style={{ marginVertical: 10 }}>
                <Text style={{ textAlign: "center" }}>Contact via</Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ marginHorizontal: 5 }}>Phone</Text>
                    <Switch
                      color={colors.primary}
                      value={values.contactByPhone}
                      onValueChange={(value) =>
                        setFieldValue("contactByPhone", value)
                      }
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ marginHorizontal: 5 }}>Email</Text>
                    <Switch
                      color={colors.primary}
                      value={values.contactByEmail}
                      onValueChange={(value) =>
                        setFieldValue("contactByEmail", value)
                      }
                    />
                  </View>
                </View>
              </View>

              <Button
                dark
                mode="contained"
                onPress={handleSubmit}
                title="Submit"
              >
                Submit
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </MainContainer>
  );
}

CreateItemScreen.navigationOptions = {
  header: null,
};
