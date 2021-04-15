import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import currencyFormatter from "currency-formatter";
import Icon from "react-native-vector-icons/Ionicons";

import { MovieFull } from "../interfaces/movieInterface";
import { Cast } from "../interfaces/creditsInterface";
import { CastItem } from "./CastItem";
import { GradientContext } from "../context/GradientContext";

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  const { colors } = useContext(GradientContext);
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="star-outline" color={colors.secondary} size={16} />

          <Text style={{ color: colors.secondary }}>
            {" "}
            {movieFull.vote_average}
          </Text>

          <Text style={{ marginLeft: 5, color: colors.secondary }}>
            - {movieFull.genres.map((g) => g.name).join(", ")}
          </Text>
        </View>

        {/* Historia */}
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: "bold",
            marginBottom: 5,
          }}
        >
          Historia
        </Text>

        <Text style={{ fontSize: 16, color: "#7b7a81", lineHeight: 22 }}>
          {movieFull.overview}
        </Text>

        {/* Historia */}
        <Text style={{ fontSize: 23, marginTop: 15, fontWeight: "bold" }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18, color: "#7b7a81" }}>
          {currencyFormatter.format(movieFull.budget, { code: "USD" })}
        </Text>
      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: "bold",
            marginHorizontal: 20,
          }}
        >
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={(item, index) => item.id.toString() + index}
          renderItem={({ item }) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 70 }}
        />
      </View>
    </>
  );
};
