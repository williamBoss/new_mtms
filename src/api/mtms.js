import { axios } from '@/utils/request'
import qs from 'qs'

const baseUrl = '/mtms'
const api = {
  disease: baseUrl + '/disease',
  assessment: baseUrl + '/assessment',
  patient: baseUrl + '/patient',
  med: baseUrl + '/med',
  detect: baseUrl + '/detect'
}
export default api

// disease
export function getDiseaseList (parameter) {
  return axios({
    url: api.disease + '/',
    method: 'get',
    params: parameter
  })
}

export function getAllDiseaseList () {
  return axios({
    url: api.disease + '/allDisease',
    method: 'get'
  })
}

export function saveDisease (parameter) {
  return axios({
    url: api.disease + '/',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function updateDisease (id, parameter) {
  return axios({
    url: api.disease + '/' + id,
    method: 'put',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function delDisease (parameter) {
  return axios({
    url: api.disease + '/' + parameter,
    method: 'DELETE'
  })
}

// patient
export function getPatientListByPhone (parameter) {
  return axios({
    url: api.patient + '/listByPhone',
    method: 'get',
    params: parameter
  })
}

export function getPatientInfoByPhone (phone) {
  return axios({
    url: api.patient + '/phone/' + phone,
    method: 'get'
  })
}

export function getPatientInfoById (id) {
  return axios({
    url: api.patient + '/id/' + id,
    method: 'get'
  })
}

export function savePatientInfo (parameter) {
  return axios({
    url: api.patient + '/',
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function updatePatientInfo (id, parameter) {
  return axios({
    url: api.patient + '/' + id,
    method: 'put',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// assessment
export function getAssessmentList (parameter) {
  return axios({
    url: api.assessment + '/',
    method: 'get',
    params: parameter,
    paramsSerializer: params => {
      return qs.stringify(params, { indices: false })
    }
  })
}

export function delAssessment (parameter) {
  return axios({
    url: api.assessment + '/del_assessment/' + parameter,
    method: 'DELETE'
  })
}

export function getAssessmentListByPatientId (parameter) {
  return axios({
    url: api.assessment + '/patientId',
    method: 'get',
    params: parameter
  })
}

// lifeStyle
export function saveLifestyle (parameter) {
  return axios({
    url: api.assessment + '/saveLifestyle',
    method: 'post',
    data: parameter
  })
}

export function getUseMedRecordList (data) {
  return axios({
    url: api.assessment + '/getUseMedRecordList',
    method: 'post',
    data
  })
}

export function saveMedicationSideEffect (data) {
  return axios({
    url: api.assessment + '/saveMedicationSideEffect',
    method: 'post',
    data
  })
}

export function saveExistSymptoms (data) {
  return axios({
    url: api.assessment + '/save_exist_symptoms',
    method: 'post',
    data
  })
}

export function saveDiagnosis (data) {
  return axios({
    url: api.assessment + '/save_diagnosis',
    method: 'post',
    data
  })
}

export function saveUseMedRecord (data) {
  return axios({
    url: api.assessment + '/saveUseMedRecord',
    method: 'post',
    data
  })
}

export function getMedicationSideEffectList (params) {
  return axios({
    url: api.assessment + '/getMedicationSideEffectList',
    method: 'get',
    params
  })
}

export function saveFamilyMedicalHistory (data) {
  return axios({
    url: api.assessment + '/save_family_medical_history',
    method: 'post',
    data
  })
}

export function savePastHistoryMedicalHistory (data) {
  return axios({
    url: api.assessment + '/save_past_medical_history',
    method: 'post',
    data
  })
}

export function savePastSurgicalHistories (data) {
  return axios({
    url: api.assessment + '/save_past_surgical_histories',
    method: 'post',
    data
  })
}

export function saveAllergyHistory (data) {
  return axios({
    url: api.assessment + '/save_allergy_history',
    method: 'post',
    data
  })
}

export function saveLiverDamage (data) {
  return axios({
    url: api.assessment + '/save_liver_damage',
    method: 'post',
    data
  })
}

export function allSurgicalHistory (paarams) {
  return axios({
    url: api.assessment + '/all_surgical_history',
    method: 'get',
    paarams
  })
}

export function getFamilyMedicalHistory (params) {
  return axios({
    url: api.assessment + '/get_family_medical_history',
    method: 'get',
    params
  })
}

export function getPastMedicalHistory (params) {
  return axios({
    url: api.assessment + '/get_past_medical_history',
    method: 'get',
    params
  })
}

export function getPastSurgicalHistories (params) {
  return axios({
    url: api.assessment + '/get_past_surgical_histories',
    method: 'get',
    params
  })
}

export function saveLifestyleSummary (data) {
  return axios({
    url: api.assessment + '/save_lifestyle_summary',
    method: 'put',
    params: data,
    paramsSerializer: data => {
      return qs.stringify(data, {
        indices: false
      })
    }
  })
}

export function saveSequelae (data) {
  return axios({
    url: api.assessment + '/save_sequelae',
    method: 'post',
    params: data,
    paramsSerializer: data => {
      return qs.stringify(data, {
        indices: false
      })
    }
  })
}

export function saveKidneyDamage (data) {
  return axios({
    url: api.assessment + '/save_kidney_damage',
    method: 'post',
    data
  })
}

export function saveAssessment (data) {
  return axios({
    url: api.assessment + '/saveAssessment',
    method: 'post',
    data
  })
}

export function getDiagnosis (params) {
  return axios({
    url: api.assessment + '/get_diagnosis',
    method: 'get',
    params
  })
}

export function getAssessmentInfo (params) {
  return axios({
    url: api.assessment + '/get_assessment_info',
    method: 'get',
    params
  })
}

export function getLifestyle (params) {
  return axios({
    url: api.assessment + '/get_lifestyle',
    method: 'get',
    params
  })
}

export function getExistingSymptoms (params) {
  return axios({
    url: api.assessment + '/get_existing_symptoms',
    methos: 'get',
    params
  })
}

// med
export function getMedByName (params) {
  return axios({
    url: api.med,
    method: 'get',
    params
  })
}

export function getAllMed () {
  return axios({
    url: api.med + '/allMed',
    method: 'get'
  })
}

// 检验检测
export function saveDetectBloodPressure (data) {
  return axios({
    url: api.detect + '/saveDetectBloodPressure',
    method: 'post',
    data
  })
}

export function getDetectBloodPressureList (params) {
  return axios({
    url: api.detect + '/getDetectBloodPressureList',
    method: 'get',
    params
  })
}

export function saveDetectHeartRate (data) {
  return axios({
    url: api.detect + '/saveDetectHeartRate',
    method: 'post',
    data
  })
}

export function getDetectHeartRateList (params) {
  return axios({
    url: api.detect + '/getDetectHeartRateList',
    method: 'get',
    params
  })
}

export function getDetectBloodLipidsList (params) {
  return axios({
    url: api.detect + '/getDetectBloodLipidsList',
    method: 'get',
    params
  })
}

export function saveDetectBloodLipids (data) {
  return axios({
    url: api.detect + '/saveDetectBloodLipids',
    method: 'post',
    data
  })
}

export function getDetectBloodSugarList (params) {
  return axios({
    url: api.detect + '/getDetectBloodSugarList',
    method: 'get',
    params
  })
}

export function saveDetectBloodSugar (data) {
  return axios({
    url: api.detect + '/saveDetectBloodSugar',
    method: 'post',
    data
  })
}

export function saveDetectHomocysteine (data) {
  return axios({
    url: api.detect + '/saveDetectHomocysteine',
    method: 'post',
    data
  })
}

export function getDetectHomocysteineList (params) {
  return axios({
    url: api.detect + '/getDetectHomocysteineList',
    method: 'get',
    params
  })
}

export function saveDetectBloodUricAcid (data) {
  return axios({
    url: api.detect + '/saveDetectBloodUricAcid',
    method: 'post',
    data
  })
}

export function getDetectBloodUricAcidList (params) {
  return axios({
    url: api.detect + '/getDetectBloodUricAcidList',
    method: 'get',
    params
  })
}

export function saveDetectLiverFunction (data) {
  return axios({
    url: api.detect + '/saveDetectLiverFunction',
    method: 'post',
    data
  })
}

export function getDetectLiverFunctionList (params) {
  return axios({
    url: api.detect + '/getDetectLiverFunctionList',
    method: 'get',
    params
  })
}

export function saveDetectKidneyFunction (data) {
  return axios({
    url: api.detect + '/saveDetectKidneyFunction',
    method: 'post',
    data
  })
}

export function getDetectKidneyFunctionList (params) {
  return axios({
    url: api.detect + '/getDetectKidneyFunctionList',
    method: 'get',
    params
  })
}

export function saveDetectElectrolyte (data) {
  return axios({
    url: api.detect + '/saveDetectElectrolyte',
    method: 'post',
    data
  })
}

export function getDetectElectrolyteList (params) {
  return axios({
    url: api.detect + '/getDetectElectrolyteList',
    method: 'get',
    params
  })
}

export function saveDetectOther (data) {
  return axios({
    url: api.detect + '/saveDetectOther',
    method: 'post',
    data
  })
}

export function getDetectOtherList (params) {
  return axios({
    url: api.detect + '/getDetectOtherList',
    method: 'get',
    params
  })
}

//
export function saveMedicationProblem (data) {
  return axios({
    url: baseUrl + '/medication_problem/',
    method: 'post',
    data
  })
}

export function getMedicationProblem (params) {
  return axios({
    url: baseUrl + '/medication_problem/',
    method: 'get',
    params
  })
}

export function medicationProblemsDict (params) {
  return axios({
    url: baseUrl + '/medication_problem/medication_problems_dict',
    method: 'get',
    params
  })
}

//
export function saveMoriskyInfo (data) {
  return axios({
    url: baseUrl + '/evaluation_scale/save_morisky_info',
    method: 'post',
    data
  })
}

export function getMoriskyInfo (params) {
  return axios({
    url: baseUrl + '/evaluation_scale/morisky_info',
    method: 'get',
    params
  })
}

export function saveEq5d3lInfo (data) {
  return axios({
    url: baseUrl + '/evaluation_scale/save_eq5d3l_info',
    method: 'post',
    data
  })
}

export function getEq5d3lInfo (params) {
  return axios({
    url: baseUrl + '/evaluation_scale/eq5d3l_info',
    method: 'get',
    params
  })
}

export function saveEq5d5lInfo (data) {
  return axios({
    url: baseUrl + '/evaluation_scale/save_eq5d5l_info',
    method: 'post',
    data
  })
}

export function getEq5d5lInfo (params) {
  return axios({
    url: baseUrl + '/evaluation_scale/eq5d5l_info',
    method: 'get',
    params
  })
}

export function saveSDSlInfo (data) {
  return axios({
    url: baseUrl + '/evaluation_scale/save_sds_info',
    method: 'post',
    data
  })
}

export function getSDSlInfo (params) {
  return axios({
    url: baseUrl + '/evaluation_scale/sds_info',
    method: 'get',
    params
  })
}

export function saveSf36Info (data) {
  return axios({
    url: baseUrl + '/evaluation_scale/save_sf36_info',
    method: 'post',
    data
  })
}

export function getSf36Info (params) {
  return axios({
    url: baseUrl + '/evaluation_scale/sf36_info',
    method: 'get',
    params
  })
}

export function saveParInfo (data) {
  return axios({
    url: baseUrl + '/evaluation_scale/save_par_info',
    method: 'post',
    data
  })
}

export function getParInfo (params) {
  return axios({
    url: baseUrl + '/evaluation_scale/par_info',
    method: 'get',
    params
  })
}

export function saveEvaluationReportProblem (data) {
  return axios({
    url: baseUrl + '/save_evaluation_report_problem',
    method: 'post',
    data
  })
}

export function saveVasInfo (data) {
  return axios({
    url: baseUrl + '/evaluation_scale/save_vas_info',
    method: 'post',
    data
  })
}

export function getVasInfo (params) {
  return axios({
    url: baseUrl + '/evaluation_scale/vas_info',
    method: 'get',
    params
  })
}

export function saveCapriniInfo (data) {
  return axios({
    url: baseUrl + '/evaluation_scale/save_caprini_info',
    method: 'post',
    data
  })
}

export function getCapriniInfo (params) {
  return axios({
    url: baseUrl + '/evaluation_scale/caprini_info',
    method: 'get',
    params
  })
}
