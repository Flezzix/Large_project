import { z } from "zod";

export const LocationMutationSchema = z.object({
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  long: z.number(),
  lat: z.number(),
});

export type LocationMutationSchemaType = z.infer<typeof LocationMutationSchema>;

export const LocationSchema = z.object({
  _id: z.string(),
  name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  location: z.object({
    type: z.string(),
    coordinates: z.tuple([z.number(), z.number()]),
  }),
  difficultyRateCount: z.number(),
  difficultyRateValue: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type LocationSchemaType = z.infer<typeof LocationSchema>;

export const LocationListSchema = z.array(LocationSchema);
