DEFINE_BASECLASS( "mp_service_base" )

local SERVICE = {}
SERVICE.Name = "Soundcloud"
SERVICE.IsTimed = true
SERVICE.Dependency = DEPENDENCY_PARTIAL

function SERVICE:New( url )
	local obj = BaseClass.New(self, url)

	-- TODO: grab id from /tracks/:id, etc.
	obj._data = obj.urlinfo.path or '0'

	return obj
end

function SERVICE:Match( url )
	return string.match( url, "soundcloud.com" )
end
