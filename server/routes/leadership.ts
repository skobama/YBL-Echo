import { RequestHandler } from "express";
import { LeadershipDistResponse } from "@shared/api";

export const handleLeadership: RequestHandler = (req, res) => {
  const response: LeadershipDistResponse = {
    totalLeaders: 888,
    leaders: 888,
    leadersPercentage: 65,
    jnr: 400,
    jnrPercentage: 45,
    snr: 488,
    snrPercentage: 55,
    powerfulLeaders: 250,
    powerfulLeadersPercentage: 88.8,
  };
  res.status(200).json(response);
};
