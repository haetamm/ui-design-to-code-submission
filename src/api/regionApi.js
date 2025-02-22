import axiosRegionInstance from '../utils/apiRegion';

export const regionApi = {
  fetchProvinces: async () => {
    try {
      const { data: response } =
        await axiosRegionInstance.get('provinces.json');
      return { data: response, error: null };
    } catch (error) {
      return {
        data: null,
        error: error.message || 'Failed to fetch provinces',
      };
    }
  },

  fetchRegencies: async (provinceId) => {
    try {
      const { data: response } = await axiosRegionInstance.get(
        `regencies/${provinceId}.json`
      );
      return { data: response, error: null };
    } catch (error) {
      return {
        data: null,
        error: error.message || 'Failed to fetch regencies',
      };
    }
  },

  fetchDistricts: async (regencyId) => {
    try {
      const { data: response } = await axiosRegionInstance.get(
        `districts/${regencyId}.json`
      );
      return { data: response, error: null };
    } catch (error) {
      return {
        data: null,
        error: error.message || 'Failed to fetch districts',
      };
    }
  },

  fetchVillages: async (districtId) => {
    try {
      const { data: response } = await axiosRegionInstance.get(
        `villages/${districtId}.json`
      );
      return { data: response, error: null };
    } catch (error) {
      return { data: null, error: error.message || 'Failed to fetch villages' };
    }
  },
};
